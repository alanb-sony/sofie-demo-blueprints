import { BlueprintResultStudioBaseline, IStudioContext } from '@sofie-automation/blueprints-integration'

export function getBaseline(_context: IStudioContext): BlueprintResultStudioBaseline {
	return {
		timelineObjects: []
	}
}
