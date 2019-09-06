import { ShowStyleContext, IngestRundown, BlueprintResultRundown, IBlueprintShowStyleVariant, IStudioConfigContext } from 'tv-automation-sofie-blueprints-integration';
export declare function getShowStyleVariantId(_context: IStudioConfigContext, showStyleVariants: Array<IBlueprintShowStyleVariant>, _ingestRundown: IngestRundown): string | null;
export declare function getRundown(context: ShowStyleContext, ingestRundown: IngestRundown): BlueprintResultRundown;
