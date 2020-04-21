import { IBlueprintPiece, IBlueprintAdLibPiece, PieceEnable } from 'tv-automation-sofie-blueprints-integration';
import { SourceLayer } from '../types/layers';
export declare function literal<T>(o: T): T;
export declare function createVirtualPiece(layer: SourceLayer, enable: number | PieceEnable, mainPiece?: IBlueprintPiece): IBlueprintPiece;
/**
 * Returs true if the piece is interface IBlueprintAdLibPiece
 * @param {IBlueprintPiece | IBlueprintAdLibPiece} piece Piece to check
 */
export declare function isAdLibPiece(piece: IBlueprintPiece | IBlueprintAdLibPiece): boolean;
