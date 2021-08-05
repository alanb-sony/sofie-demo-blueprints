import { SpreadsheetIngestPiece } from '../../copy/spreadsheet-gateway'

export type SomeObject =
	| CameraObject
	| VideoObject
	| GraphicObject
	| SplitObject
	| OverlayObject
	| LightsObject
	| TransitionObject
	| RemoteObject
	| PipObject
	| VoiceoverObject
	| ScriptObject

export type SomeAdlibPiece = VideoObject | GraphicObject

export enum ObjectType {
	Camera = 'camera',
	Video = 'video',
	Graphic = 'graphic',
	Split = 'split',
	Overlay = 'overlay',
	Lights = 'lights',
	Transition = 'transition',
	Remote = 'remote',
	Pip = 'pip',
	Voiceover = 'voiceover',
	Script = 'script',
}

export interface BaseObject extends SpreadsheetIngestPiece {
	isAdlib?: boolean
	isStudioMon?: boolean
}

export interface CameraObject extends BaseObject {
	objectType: ObjectType.Camera
	attributes: {
		camNo: string
	}
}
export interface VideoObject extends BaseObject {
	objectType: ObjectType.Video
	adlibVariant?: string
}
export interface GraphicObject extends BaseObject {
	objectType: ObjectType.Graphic
	attributes: {
		template: string
		f0: string
		f1: string
		f2: string
	}
	adlibVariant?: string
}
export interface SplitObject extends BaseObject {
	objectType: ObjectType.Split
	attributes: {
		layout: string
		input1: string
		input2: string
	}
}
export interface OverlayObject extends BaseObject {
	objectType: ObjectType.Overlay
}
export interface LightsObject extends BaseObject {
	objectType: ObjectType.Lights
}
export interface TransitionObject extends BaseObject {
	objectType: ObjectType.Transition
	attributes: {
		type: string
	}
}
export interface RemoteObject extends BaseObject {
	objectType: ObjectType.Remote
	attributes: {
		input: string
	}
}
export interface PipObject extends BaseObject {
	objectType: ObjectType.Pip
}
export interface VoiceoverObject extends BaseObject {
	objectType: ObjectType.Voiceover
}
export interface ScriptObject extends BaseObject {
	objectType: ObjectType.Script
}
