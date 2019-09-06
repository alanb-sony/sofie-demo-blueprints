import { Piece } from '../../types/classes';
import { TimelineEnable } from 'timeline-state-resolver-types/dist/superfly-timeline';
import { TimelineObjAtemME, AtemTransitionStyle, TimelineObjLawoSource, TimelineObjCCGMedia, AtemTransitionSettings } from 'timeline-state-resolver-types';
import { AtemLLayer, CasparLLayer } from '../../types/layers';
/**
 * Creates an enable object for a timeline object.
 * @param {Piece} piece Piece to create enable for.
 */
export declare function CreateEnableForTimelineObject(piece: Piece, delay?: number): TimelineEnable;
/**
 * Creates a timeline object for switching ATEM sources.
 * @param {TimelineEnable} enable Timeline object enable.
 * @param {AtemLLayer} layer Layer to place content onto.
 * @param {number} input Input to switch to.
 * @param {AtemTransitionStyle} transition Transition to use.
 * @param {AtemTransitionSettings} transitionSettings Transition settings.
 */
export declare function CreateAtemTimelineObject(enable: TimelineEnable, layer: AtemLLayer, input: number, transition: AtemTransitionStyle, transitionSettings?: AtemTransitionSettings): TimelineObjAtemME;
/**
 * Creates a timeline object for an ATEM transition.
 * @param {TimelineEnable} enable Timeline object enable.
 * @param {AtemTransitionStyle} transition Transition to use.
 */
export declare function CreateTransitionAtemTimelineObject(enable: TimelineEnable, transition: AtemTransitionStyle, input: number): TimelineObjAtemME;
/**
 * Creates a timeline object for a LAWO automix.
 * @param {TimelineEnable} enable Timeline object enable.
 */
export declare function CreateLawoAutomixTimelineObject(enable: TimelineEnable): TimelineObjLawoSource;
/**
 * Creates a timeline object for a CCG media item
 * @param {TimelineEnable} enable Timeline object enable.
 * @param {CasparLLayer} layer Output layer.
 * @param {string} file File to play.
 */
export declare function CreateCCGMediaTimelineObject(enable: TimelineEnable, layer: CasparLLayer, file: string): TimelineObjCCGMedia;
