block('content')
    .elem('header')
    .match(ctx => ctx.elemMods.level >= 1 && ctx.elemMods.level <= 6)(

        tag()(ctx => 'h' + ctx.elemMods.level)
    );
