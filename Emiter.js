;(function(win) {
	var _events = {}

	function emit(type, fn) {
		if( !_events[type] ) {
			_events[type] = []
		}

		_events[type].push(fn);
	}

	function fire(type) {
		if(_events[type] instanceof Array) {
			_events[type].forEach(function(fn) {
				fn && typeof fn === 'function' && fn()
			})
		}
	}

	var Emiter = {
		emit: emit,
		fire: fire
	}

	try {
		module.exports = Emiter
	} 
	catch (_) {
		win['Emiter'] = Emiter
	}
})(window);
