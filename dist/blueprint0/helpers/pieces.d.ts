import { Piece, PieceParams } from '../../types/classes';
import { IBlueprintAdLibPiece, IBlueprintPiece } from 'tv-automation-sofie-blueprints-integration';
import { AtemTransitionStyle } from 'timeline-state-resolver-types';
/**
 * Creates a generic adLib piece.
 * @param {Piece} piece Piece properties.
 */
export declare function CreatePieceGenericAdLib(piece: Piece): IBlueprintAdLibPiece;
/**
 * Creates a generic IBlueprintPiece.
 * @param {Piece} piece Piece properties.
 */
export declare function CreatePieceGenericEnable(piece: Piece): IBlueprintPiece;
/**
 * Creates a generic piece. Will return an Adlib piece if suitable.
 * @param {Piece} piece Piece to evaluate.
 * @returns {IBlueprintPieceGeneric} A possibly infinite, possibly Adlib piece.
 */
export declare function CreatePieceGeneric(piece: Piece): IBlueprintAdLibPiece | IBlueprintPiece;
/**
 * Creates a transition piece.
 * @param {Piece} piece Piece to generate.
 * @param {AtemTransitionStyle} transition Transition style.
 * @param {number} duration Length of transition.
 */
export declare function CreatePieceInTransition(piece: Piece, transition: AtemTransitionStyle, duration: number, input: number): IBlueprintPiece;
/**
 * Creates an out transition of given duration.
 * @param {Piece} piece Piece to transition.
 * @param {AtemTransitionStyle} transition Transition type.
 * @param {number} duration Length of transition.
 */
export declare function CreatePieceOutTransition(piece: Piece, transition: AtemTransitionStyle, duration: number, input: number): IBlueprintPiece;
/**
 * Creates a breaker piece.
 * @param piece Piece to create.
 * @param duration Transition duraation.
 */
export declare function CreatePieceBreaker(piece: Piece, duration: number): IBlueprintPiece;
/**
 * Creates a cam piece.
 * @param {PieceParams} params Piece to create.
 */
export declare function CreatePieceCam(params: PieceParams, transition: AtemTransitionStyle): IBlueprintAdLibPiece | IBlueprintPiece;
/**
 * Creates a cam piece.
 * @param {PieceParams} params Piece to create.
 */
export declare function CreatePieceVideo(params: PieceParams, transition: AtemTransitionStyle): IBlueprintAdLibPiece | IBlueprintPiece;
/**
 * Creates a cam piece.
 * @param {PieceParams} params Piece to create.
 */
export declare function CreatePieceGraphic(params: PieceParams, transition: AtemTransitionStyle): IBlueprintAdLibPiece | IBlueprintPiece;
/**
 * Creates a remote source.
 * @param params Piece to create.
 * @param transition In transition.
 */
export declare function CreatePieceRemote(params: PieceParams, transition: AtemTransitionStyle): IBlueprintAdLibPiece | IBlueprintPiece;
/**
 * Creates a graphics overlay.
 * @param {PieceParams} params Piece to create.
 */
export declare function CreatePieceGraphicOverlay(params: PieceParams, transition: AtemTransitionStyle): IBlueprintAdLibPiece | IBlueprintPiece;
/**
 * Creates a script piece.
 * @param {PieceParams} params Piece to create.
 */
export declare function CreatePieceScript(params: PieceParams): IBlueprintPiece;
/**
 * Creates a voiceover piece.
 * @param {PieceParams} params Piece to create.
 */
export declare function CreatePieceVoiceover(params: PieceParams): IBlueprintPiece;
