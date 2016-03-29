block('content').elem('*').match(ctx => (ctx.block == 'content'))(

    match(ctx => /h([1-6])/.test(ctx.elem))(

        mix()((ctx, bemjson) => {
            const headerLevel = /h([1-6])/.exec(ctx.elem);
            const result      = Object.assign(bemjson.mix || {}, {
                elem     : 'h',
                elemMods : {}
            });

            result.elemMods[headerLevel[1]] = true;

            return result;
        })
    ),

    match(ctx => /t[dh]/.test(ctx.elem))(

        mix()((ctx, bemjson) => {

            return Object.assign(bemjson.mix || {}, {
                elem : 'tc'
            });
        })
    ),

    tag()(ctx => applyNext() || ctx.elem)
);
