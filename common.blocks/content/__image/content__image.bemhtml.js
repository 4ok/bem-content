block('content').elem('image')(

    def()((ctx, json) => { // TODO: replace, wrapper

        // TODO: mods => elemMods, markdown-converter
        const mods = ctx.mods;
        const mix  = {
            block: ctx.block,
            elem:  ctx.elem
        };

        if (mods) {
            mix.mods = mods;
            delete json.mods;
        }

        delete json.elem;

        json.block = 'image';
        json.mix   = mix;

        if (mods && mods.align == 'right') {
            json = {
                elem : 'wrapper',
                mods : {
                    'text-align': 'right'
                },
                content : json
            }
        }

        return applyCtx(json);
    })
);
