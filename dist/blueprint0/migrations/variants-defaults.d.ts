import { MigrationStepShowStyle } from 'tv-automation-sofie-blueprints-integration';
/**
 * Variants can be used to configure small variants in how running orders are generated from the input data.
 * This can be useful when there are multiple studios producing a very similar show.
 */
export declare type VariantRegion = {
    [key: string]: {
        name: string;
    };
};
export declare const showVariants: VariantRegion;
export declare function getCreateVariantMigrationSteps(): MigrationStepShowStyle[];
