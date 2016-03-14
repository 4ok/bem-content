block('content')
(
    elemMatch(function() {
        const ctx = this.ctx;

        return ctx.elem;
    })
    (
        tag()(function() {
            const ctx = this.ctx;

            return ctx.elem;
        })
    )
);
