block('content').elem('*').match(ctx => (ctx.block == 'content'))(

    tag()(ctx => applyNext() || ctx.elem)
);
