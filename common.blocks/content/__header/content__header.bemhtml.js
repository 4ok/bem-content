block('content').elem('header').elemMod('level')
(
    tag()(function () { // TODO: not work
        const level = (this.elemMods.level > 0)
            ? this.mods.level
            : 1;

        return 'h' + level;
    })
);
