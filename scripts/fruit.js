class Fruit
{
    constructor(ctx, scale, rows, columns)
    {
        this.ctx = ctx;
        this.scale = scale;
        this.columns = columns;
        this.rows = rows;
        this.x;
        this.y;
        this.update();
    }

    draw()
    {
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fillRect(this.x, this.y, this.scale, this.scale);
    }

    update()
    {
        this.x = (Math.floor(Math.random() * this.columns - 1) + 1) * this.scale;
        this.y = (Math.floor(Math.random() * this.rows - 1) + 1) * this.scale;
    }
}