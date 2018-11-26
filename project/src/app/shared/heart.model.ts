export class HeartModel {

    constructor(
        public full: boolean, 
        public heartFull: string = '/assets/heart_full.png', 
        public heartEmpty: string = '/assets/heart_empty.png') {
        
        this.full = full;
        this.heartFull = this.heartFull;
        this.heartEmpty = heartEmpty;
    }

    public displayHeart(): string {

        return this.full ? this.heartFull : this.heartEmpty;
    }
}