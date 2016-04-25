block('content').elem('a')(

    replace()((ctx, json) => ({
        block : 'link',
        url : json.url,
        content : json.content,
        mix : [{
            block : ctx.block,
            elem : ctx.elem,
            mods : ctx.mods,
        }].concat(json.mix || []),
    }))
);
