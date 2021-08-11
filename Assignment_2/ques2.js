class Queens {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;

    }

    canAttack() {
        if ((this.p1[0] == this.p2[0]) || (this.p1[1] == this.p2[1]) || (Math.abs(this.p1[0] - this.p2[0]) == Math.abs(this.p1[1] - this.p2[1])) )
           {console.log('Can attack'); } 

        else {
            console.log('Cannot attack')
        }

    }

}

const p1 = [1, 5];
const p2 = [3, 2];

const result = new Queens(p1, p2);
result.canAttack();