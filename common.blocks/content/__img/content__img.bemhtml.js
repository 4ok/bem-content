block('content').elem('img')(

    replace()((ctx, json) => ({
        block : 'image',
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
