import { BlueprintResultPart, IBlueprintPiece, PieceLifespan, TSR } from "@sofie-automation/blueprints-integration";
import { PartContext } from "../../common/context";
import { getOutputLayerForSourceLayer, SourceLayer } from "../layers";
import { TitlesProps, PartProps } from "../definitions";
import { literal } from "../../common/util";
import { CasparCGLayers } from "../../studio0/layers";
import { createScriptPiece } from "../helpers/script";
import { StudioConfig } from "../../studio0/helpers/config";
import { getClipPlayerInput } from "../helpers/clips";
import { createAtemInputTimelineObjects } from "../helpers/atem";

export function generateOpenerPart(context: PartContext, part: PartProps<TitlesProps>): BlueprintResultPart {
    const config = context.getStudioConfig() as StudioConfig
    const atemInput = getClipPlayerInput(config)

    const cameraPiece: IBlueprintPiece = {
        enable: {
            start: 0,
        },
        externalId: part.payload.externalId,
        name: `Titles`,
        lifespan: PieceLifespan.WithinPart,
        sourceLayerId: SourceLayer.Titles,
        outputLayerId: getOutputLayerForSourceLayer(SourceLayer.Titles),

        content: {
            fileName: 'std/titles',

            timelineObjects: [
                ...createAtemInputTimelineObjects(atemInput?.input || 0),

                // clip
                literal<TSR.TimelineObjCCGMedia>({
                    id: '',
                    enable: { start: 0 },
                    layer: CasparCGLayers.CasparCGEffectsPlayer,
                    content: {
                        deviceType: TSR.DeviceType.CASPARCG,
                        type: TSR.TimelineContentTypeCasparCg.MEDIA,

                        file: 'assets/Sofie News Opener'
                    }
                })
            ]
        }
    }
    
    const pieces = [
        cameraPiece
    ]
    const scriptPiece = createScriptPiece(part.payload.script, part.payload.externalId)
    if (scriptPiece) pieces.push(scriptPiece)

    return {
        part: {
            externalId: part.payload.externalId,
            title: part.payload.name,

            expectedDuration: part.payload.duration,
            autoNext: true,
        },
        pieces,
        adLibPieces: [],
    }
}
