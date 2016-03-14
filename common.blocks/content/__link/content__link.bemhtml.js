block('content').elem('link')
(
    replace()(function() {
        const ctx = this.ctx;
        let mix   = [];

        mix.push({
            block: this.block,
            elem:  this.elem
        });

        if (ctx.mix) {

            if (this.isArray(ctx.mix)) {
                mix = mix.concat(ctx.mix);
            } else {
                mix.push(ctx.mix);
            }
        }

        if (ctx.mods) {
            mix.mods = ctx.mods;

            delete ctx.mods;
        }

        delete ctx.elem;

        ctx.block = 'link';
        ctx.mix   = mix;

        return ctx;
    })
);
