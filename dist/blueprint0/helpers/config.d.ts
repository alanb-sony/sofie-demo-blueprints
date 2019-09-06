import { ShowStyleContext } from 'tv-automation-sofie-blueprints-integration';
export interface BlueprintConfig {
    studio: StudioConfig;
    showStyle: ShowStyleConfig;
}
export interface ShowStyleConfig {
}
export interface StudioConfig {
    SofieHostURL: string;
    MediaFlowId: string;
    SourcesCam: string;
    SourcesRM: string;
    HyperdeckCount: number;
    AtemSource: {
        DSK1F: number;
        DSK1K: number;
        DSK2F: number;
        DSK2K: number;
        Server1: number;
        Server1Next: number;
        Server2: number;
        Server3: number;
        SplitArtF: number;
        SplitArtK: number;
        Default: number;
    };
    LawoFadeInDuration: number;
    CasparOutputDelay: number;
}
export declare function parseConfig(context: ShowStyleContext): BlueprintConfig;
