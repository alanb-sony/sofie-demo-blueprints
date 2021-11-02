import { ISourceLayer, SourceLayerType } from '@sofie-automation/blueprints-integration'
import { literal } from '../../common/util'
import { SourceLayer } from '../layers'

export default literal<ISourceLayer[]>([
	{
		_id: SourceLayer.Titles,
		_rank: 200,
		name: 'Titles',
		abbreviation: 'VT',
		type: SourceLayerType.VT,
		onPresenterScreen: true,
	},
	{
		_id: SourceLayer.Camera,
		type: SourceLayerType.CAMERA,
		_rank: 100,
		name: 'Camera',
		abbreviation: 'Cam',
		exclusiveGroup: 'pgm',
		activateKeyboardHotkeys: 'f1,f2,f3,f4,f5',
		assignHotkeysToGlobalAdlibs: true,
		onPresenterScreen: true,
	},
	{
		_id: SourceLayer.Remote,
		type: SourceLayerType.REMOTE,
		_rank: 100,
		name: 'Remote',
		abbreviation: 'Rem',
		exclusiveGroup: 'pgm',
		activateKeyboardHotkeys: 'f7,1,2,3,4,5',
		assignHotkeysToGlobalAdlibs: true,
		onPresenterScreen: true,
	},
	{
		_id: SourceLayer.VO,
		type: SourceLayerType.LIVE_SPEAK,
		_rank: 101,
		name: 'Voice Over',
		abbreviation: 'VO',
		exclusiveGroup: 'pgm',
		onPresenterScreen: true,
	},
	{
		_id: SourceLayer.VT,
		type: SourceLayerType.VT,
		_rank: 100,
		name: 'VT',
		abbreviation: 'VT',
		exclusiveGroup: 'pgm',
		onPresenterScreen: true,
	},
	{
		_id: SourceLayer.DVE,
		type: SourceLayerType.SPLITS,
		_rank: 100,
		name: 'DVE',
		abbreviation: 'DVE',
		exclusiveGroup: 'pgm',
		onPresenterScreen: true,
		activateKeyboardHotkeys: 'f8',
		assignHotkeysToGlobalAdlibs: true
	},
	{
		_id: SourceLayer.GFX,
		type: SourceLayerType.GRAPHICS,
		_rank: 100,
		name: 'GFX',
		abbreviation: 'GFX',
		exclusiveGroup: 'pgm',
		onPresenterScreen: true,
	},

	{
		_id: SourceLayer.LowerThird,
		type: SourceLayerType.GRAPHICS,
		_rank: 200,
		name: 'Lower Third',
		abbreviation: 'L3d',
		activateKeyboardHotkeys: 'q,w,e,r,t'
	},
	{
		_id: SourceLayer.Strap,
		type: SourceLayerType.GRAPHICS,
		_rank: 201,
		name: 'Strap',
		abbreviation: 'Strap',
	},
	{
		_id: SourceLayer.Ticker,
		type: SourceLayerType.GRAPHICS,
		_rank: 202,
		name: 'Ticker',
		isHidden: true,
	},
	{
		_id: SourceLayer.Logo,
		type: SourceLayerType.GRAPHICS,
		_rank: 204,
		name: 'Logo',
		isHidden: true,
	},

	{
		_id: SourceLayer.AudioBed,
		type: SourceLayerType.AUDIO,
		_rank: 203,
		name: 'Audio Bed',
		abbreviation: 'Bed',
		isHidden: true,
	},

	{
		_id: SourceLayer.Script,
		type: SourceLayerType.SCRIPT,
		_rank: 50,
		name: 'Script',
		abbreviation: 'Scr',
	},
])
