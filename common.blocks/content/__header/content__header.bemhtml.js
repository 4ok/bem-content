block('content').elem('header')
(
    tag()(function () {
        const level = (this.mods.level > 0)
            ? this.mods.level
            : 1;

        return 'h' + level;
    })
);
