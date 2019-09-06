import { BlueprintConfig } from './config';
import { NotesContext, SourceLayerType } from 'tv-automation-sofie-blueprints-integration';
import { Piece, SegmentConf } from '../../types/classes';
export declare enum Attributes {
    CAMERA = "name",
    TRANSITION = "type",
    REMOTE = "source"
}
export declare function parseMapStr(context: NotesContext | undefined, str: string, canBeStrings: boolean): {
    id: number;
    val: any;
}[];
declare type SourceInfoType = SourceLayerType.CAMERA | SourceLayerType.REMOTE;
export interface SourceInfo {
    type: SourceInfoType;
    id: number;
    port: number;
    ptzDevice?: string;
}
export declare function parseSources(context: NotesContext | undefined, config: BlueprintConfig): SourceInfo[];
export declare function FindSourceInfo(sources: SourceInfo[], type: SourceInfoType, id: number | string): SourceInfo | undefined;
export declare function FindSourceInfoStrict(context: NotesContext, sources: SourceInfo[], type: SourceInfoType, id: number | string): SourceInfo | undefined;
export declare function FindSourceByName(context: NotesContext, sources: SourceInfo[], name: string): SourceInfo | undefined;
export declare function GetInputValue(context: NotesContext, sources: SourceInfo[], name: string): number;
/**
 * Gets The input number from a piece.
 * @param params Segment parameters.
 * @param piece Piece to get input from.
 */
export declare function GetInputValueFromPiece(params: SegmentConf, piece: Piece): number;
export {};
