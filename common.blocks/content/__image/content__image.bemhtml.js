block('content').elem('image')(

    replace()(function() {
        let ctx = this.ctx;

        const mods = this.mods;
        let mix    = {
            block: this.block,
            elem:  this.elem
        };

        if (mods) {
            mix.mods = mods;
            delete ctx.mods;
        }

        delete ctx.elem;

        this.block = 'image';
        this.mix   = mix;

        if (mods && 'right' == mods.align) {
            ctx = {
                elem : 'wrapper',
                mods : {
                    'text-align': 'right'
                },
                content : ctx
            }
        }

        return ctx;
    })
);
