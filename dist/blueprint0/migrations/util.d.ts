import { MigrationStepStudio, MigrationStepShowStyle, ConfigItemValue } from 'tv-automation-sofie-blueprints-integration';
export declare function ensureStudioConfig(version: string, configName: string, value: any | null, // null if manual
inputType: 'text' | 'multiline' | 'int' | 'checkbox' | 'dropdown' | 'switch' | undefined, // EditAttribute types
label: string, description: string, defaultValue?: any, oldConfigName?: string, dropdownOptions?: string[]): MigrationStepStudio;
export declare function renameStudioConfig(version: string, oldConfigName: string, newConfigName: string, updateValue?: (val: any) => ConfigItemValue): MigrationStepStudio;
export declare function renameMapping(version: string, oldMappingName: string, newMappingName: string): MigrationStepStudio;
export declare function removeMapping(version: string, oldMappingName: string): MigrationStepStudio;
export declare function getMappingsDefaultsMigrationSteps(versionStr: string): MigrationStepStudio[];
export declare function getSourceLayerDefaultsMigrationSteps(versionStr: string): MigrationStepShowStyle[];
export declare function getOutputLayerDefaultsMigrationSteps(versionStr: string): MigrationStepShowStyle[];
export declare function getRuntimeArgumentsDefaultsMigrationSteps(versionStr: string): MigrationStepShowStyle[];
