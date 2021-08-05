import { IBlueprintAdLibPiece, IBlueprintPiece, PieceLifespan, TSR } from '@sofie-automation/blueprints-integration'
import { GraphicObject, ObjectType, SomeObject } from '../../common/definitions/objects'
import { literal } from '../../common/util'
import { StudioConfig } from '../../studio0/helpers/config'
import { CasparCGLayers } from '../../studio0/layers'
import { getOutputLayerForSourceLayer, SourceLayer } from '../layers'
import { createAtemInputTimelineObjects } from './atem'
import { getClipPlayerInput } from './clips'

export interface GraphicsResult {
	pieces: IBlueprintPiece[]
	adLibPieces: IBlueprintAdLibPiece[]
}

function getGraphicSourceLayer(object: GraphicObject): SourceLayer {
	if (object.attributes.template.match(/ticker/i)) {
		return SourceLayer.Ticker
	} else if (object.attributes.template.match(/strap/i)) {
		return SourceLayer.Strap
	} else if (object.attributes.template.match(/fullscreen/i)) {
		return SourceLayer.GFX
	} else {
		return SourceLayer.LowerThird
	}
}
function getGraphicTlLayer(object: GraphicObject): CasparCGLayers {
	if (object.attributes.template.match(/ticker/i)) {
		return CasparCGLayers.CasparCGGraphicsTicker
	} else if (object.attributes.template.match(/strap/i)) {
		return CasparCGLayers.CasparCGGraphicsStrap
	} else if (object.attributes.template.match(/fullscreen/i)) {
		return CasparCGLayers.CasparCGClipPlayer
	} else {
		return CasparCGLayers.CasparCGGraphicsLowerThird
	}
}

function getGraphicTlObject(config: StudioConfig, object: GraphicObject): TSR.TSRTimelineObj[] {
	const fullscreenAtemInput = getClipPlayerInput(config)

	return [
		literal<TSR.TimelineObjCCGTemplate>({
			id: '',
			enable: {
				start: 0, // TODO - this might not be quite right
			},
			layer: getGraphicTlLayer(object),
			content: {
				deviceType: TSR.DeviceType.CASPARCG,
				type: TSR.TimelineContentTypeCasparCg.TEMPLATE,

				templateType: 'html',
				name: object.attributes.template,
				data: {
					...object.attributes,
				},
				useStopCommand: true,
			},
		}),
		...(object.attributes.template.match(/fullscreen/i)
			? createAtemInputTimelineObjects(fullscreenAtemInput?.input || 0, config.casparcgLatency)
			: []),
	]
}
function parseGraphic(config: StudioConfig, object: GraphicObject): IBlueprintPiece {
	const sourceLayer = getGraphicSourceLayer(object)

	return {
		externalId: object.id,
		name: `${object.attributes.template} | ${Object.values(object.attributes)
			.filter((v) => v !== 'true' && v !== 'false')
			.join(', ')}`, // todo - add info
		lifespan: sourceLayer === SourceLayer.Ticker ? PieceLifespan.OutOnRundownEnd : PieceLifespan.WithinPart, // todo - infinite modes
		sourceLayerId: sourceLayer,
		outputLayerId: getOutputLayerForSourceLayer(sourceLayer),
		content: {
			timelineObjects: getGraphicTlObject(config, object),

			payload: {
				content: {
					...object.attributes,
					adlib: undefined,
				},
				manifest: '',
				template: {
					event: '',
					layer: '',
					name: object.attributes.template,
				},
			},
			previewRenderer: config.previewRenderer,
		},
		enable: {
			start: object.objectTime || 0,
			duration: object.duration > 0 ? object.duration : undefined,
		},
	}
}
function parseAdlibGraphic(config: StudioConfig, object: GraphicObject, index: number): IBlueprintAdLibPiece {
	return {
		externalId: object.id,
		name: `${object.attributes.template} | ${Object.values(object.attributes)
			.filter((v) => v !== 'true' && v !== 'false')
			.join(', ')}`, // todo - add info
		lifespan: PieceLifespan.WithinPart, // todo - infinite modes
		sourceLayerId: SourceLayer.LowerThird,
		outputLayerId: getOutputLayerForSourceLayer(SourceLayer.LowerThird),
		content: {
			timelineObjects: getGraphicTlObject(config, object),

			payload: {
				content: {
					...object.attributes,
					adlib: undefined,
				},
				manifest: '',
				template: {
					event: '',
					layer: '',
					name: object.attributes.template,
				},
			},
		},
		_rank: index, // todo - probably some offset for ordering
		expectedDuration: object.duration,
	}
}

export function parseGraphicsFromObjects(config: StudioConfig, objects: SomeObject[]): GraphicsResult {
	const graphicsObjects = objects.filter((o): o is GraphicObject => o.objectType === ObjectType.Graphic)

	return {
		pieces: graphicsObjects.filter((o) => o.objectTime !== undefined).map((o) => parseGraphic(config, o)),
		adLibPieces: graphicsObjects.filter((o) => o.objectTime === undefined).map((o, i) => parseAdlibGraphic(config, o, i)),
	}
}
