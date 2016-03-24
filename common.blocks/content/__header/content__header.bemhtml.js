block('content')
    .elem('header')
    .match(function () {
        const level = this.elemMods.level;

        return level >= 1 && level <= 6;
    })(
        tag()(function () {
            return 'h' + this.elemMods.level;
        })
    );
