import { Piece, SegmentConf } from '../../types/classes';
import { IBlueprintPiece, IBlueprintAdLibPiece } from 'tv-automation-sofie-blueprints-integration';
/**
 * Creates a DVE Piece.
 * @param {SegmentConf} config Segment config.
 * @param {Piece[]} pieces Pieces to insert into the DVE.
 * @param {number} sources Number of sources to display.
 * @param {number} width Screen width.
 * @param {number} height Screen height.
 */
export declare function CreateDVE(config: SegmentConf, pieces: Piece[], sources: number, width: number, height: number): IBlueprintPiece | IBlueprintAdLibPiece | undefined;
