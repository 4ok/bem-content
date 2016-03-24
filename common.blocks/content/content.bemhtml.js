block('content')
    .elem('*')
    .match(function () {
        return (this.block == 'content')
    })(
        tag()(function () {
            return applyNext() || this.elem;
        })
    );
