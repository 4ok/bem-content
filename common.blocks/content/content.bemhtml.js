block('content').elem('*').match(ctx => (ctx.block === 'content'))(

    match(ctx => /h([1-6])/.test(ctx.elem))(

        mix()((ctx, json) => {
            const headerLevel = /h([1-6])/.exec(ctx.elem);

            return {
                elem: 'h',
                elemMods: Object.assign({
                    level: headerLevel[1],
                }, json.elemMods || {}),
                mix: json.mix,
            };
        })
    ),

    match(ctx => /t[dh]/.test(ctx.elem))(

        mix()(() => ({
            elem: 'tc',
        }))
    ),

    tag()(ctx => applyNext() || ctx.elem)
);
