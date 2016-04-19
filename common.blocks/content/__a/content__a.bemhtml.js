block('content').elem('a')(

    replace()((ctx, json) => ({
        block : 'link',
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
