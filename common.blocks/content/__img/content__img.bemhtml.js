block('content').elem('img')(

    replace()((ctx, json) => ({
        block : 'image',
        url : json.url,
        mix : [
            {
                block : ctx.block,
                elem : ctx.elem,
                mods : ctx.mods,
            },
        ]
        .concat(json.mix || []),
    }))
);
