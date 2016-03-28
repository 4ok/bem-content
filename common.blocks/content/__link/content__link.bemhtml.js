block('content').elem('link')(

    def()((ctx, json) => { // TODO: replace, optimization code
        let mix = [];

        mix.push({
            block: ctx.block,
            elem:  ctx.elem
        });

        if (json.mix) {

            if (Array.isArray(json.mix)) {
                mix = mix.concat(json.mix);
            } else {
                mix.push(json.mix);
            }
        }

        if (ctx.mods) {
            mix.mods = ctx.mods;

            delete json.mods;
        }

        delete json.elem;

        json.block = 'link';
        json.mix   = mix;

        return applyCtx(json);
    })
);
