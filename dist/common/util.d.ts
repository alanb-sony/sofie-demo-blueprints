import { IBlueprintPiece, IBlueprintAdLibPiece } from 'tv-automation-sofie-blueprints-integration';
import { SourceLayer } from '../types/layers';
import { TimelineEnable } from 'timeline-state-resolver-types/dist/superfly-timeline';
export declare function literal<T>(o: T): T;
export declare function createVirtualPiece(layer: SourceLayer, enable: number | TimelineEnable, mainPiece?: IBlueprintPiece): IBlueprintPiece;
/**
 * Returs true if the piece is interface IBlueprintAdLibPiece
 * @param {IBlueprintPiece | IBlueprintAdLibPiece} piece Piece to check
 */
export declare function isAdLibPiece(piece: IBlueprintPiece | IBlueprintAdLibPiece): boolean;
