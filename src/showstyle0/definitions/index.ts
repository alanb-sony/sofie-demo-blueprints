import { ITranslatableMessage } from '@sofie-automation/blueprints-integration'
import { GraphicObject, SomeObject } from '../../common/definitions/objects'
import { ClipProps } from '../helpers/clips'
import { sanitizeName } from '../helpers/sanitize'
import { RawSourceInfo } from '../helpers/sources'
import { IntermediatePart, IntermediateSegment } from './intermediate'

export enum AdLibTags {
	Camera = 'camera',
	Live = 'live',
	Queue = 'queue',
	DirectCut = 'direct_cut',
}

/**
 * Creates an adLib tag for a particular camera, example:
 * 	AdLibTagCamera('host') -> 'camera_host'
 * @param camera Name of the camera to generate a tag for
 */
export function adLibTagCamera(camera: string) {
	return `camera_${sanitizeName(camera)}`
}

/**
 * Creates an adLib tag for a particular live, example:
 * 	AdLibTagLive('westminster') -> 'live_westminster'
 * @param live Name of the live to generate a tag for
 */
export function adLibTagLive(live: string) {
	return `live_${sanitizeName(live)}`
}

export enum SegmentType {
	NORMAL = 'normal',
	OPENING = 'opening',
}

export enum PartType {
	// UNKNOWN = '',
	Invalid = 'invalid',
	Camera = 'camera',
	Remote = 'remote',
	VT = 'vt',
	VO = 'vo',
	Titles = 'titles',
	DVE = 'dve',
	GFX = 'gfx',
}

export enum PartInfo {
	NORMAL = 0,
}

export type AllProps = CameraProps | RemoteProps | VTProps | VOProps | TitlesProps | DVEProps | GfxProps | InvalidProps

export interface PartProps<T extends AllProps> extends IntermediatePart {
	type: PartType | null
	rawType: string
	rawTitle: string
	info: PartInfo
	payload: T
	objects: SomeObject[]
}

export interface SegmentProps extends IntermediateSegment {
	type: SegmentType | null
	parts: PartProps<AllProps>[]
	payload: {
		name: string
	}
}

export interface PartBaseProps {
	externalId: string
	duration: number
	name: string
	script?: string
}

export interface CameraProps extends PartBaseProps {
	input: RawSourceInfo
}

export interface TitlesProps extends PartBaseProps {
	variant: string
}

export interface RemoteProps extends PartBaseProps {
	input: RawSourceInfo
}

export interface VTProps extends PartBaseProps {
	clipProps: ClipProps
}

export interface VOProps extends PartBaseProps {
	clipProps: ClipProps
}

export interface DVEProps extends PartBaseProps {
	layout: string
	inputs: Array<RawSourceInfo | ClipProps>
}

export interface GfxProps extends PartBaseProps {
	graphic: GraphicObject
}

export interface InvalidProps extends PartBaseProps {
	invalidReason: ITranslatableMessage
}
