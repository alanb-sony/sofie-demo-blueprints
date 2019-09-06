import { SegmentConf, Piece } from '../../types/classes';
import { CameraContent, VTContent, GraphicsContent, RemoteContent } from 'tv-automation-sofie-blueprints-integration';
/**
 * Creates a base camera content.
 */
export declare function CreateContentCam(config: SegmentConf, piece: Piece): CameraContent;
/**
 * Creates a base VT content.
 * @param piece Piece used to create content.
 */
export declare function CreateContentVT(piece: Piece): VTContent;
/**
 * Creates a base graphics content.
 * @param piece Piece used to create content.
 */
export declare function CreateContentGraphics(piece: Piece): GraphicsContent;
/**
 * Creates a base remote content.
 * @param config Segment config.
 * @param piece Piece used to create content.
 */
export declare function CreateContentRemote(config: SegmentConf, piece: Piece): RemoteContent;
