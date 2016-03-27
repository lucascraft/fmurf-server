sketch.default2d();

var instance;
var lifecycle;

instance = this.patcher.getnamed("fmurf-forward");
lifecycle = this.patcher.getnamed("fmurf-lifecycle");

function bang()
{
	
	this.patcher.connect(lifecycle, 1, instance, 0);
}