export function onRequest(request, env, context) {

	let bodydata = request.options.body;

	return new Response(bodydata);
}