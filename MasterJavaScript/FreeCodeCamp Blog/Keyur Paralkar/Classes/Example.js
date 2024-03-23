class Chair {
    //Defaults that will be common for all the instances:
        static backSupport = true;
        static armRests = true;
        
        constructor(color, seatHeight, recliningAngle, headSupport, 
            padding, seatSize, isHeightAdjustable, isMovable){
            //Defaults which can be changed by the subclass class.
            this.color = color;
            this.seatHeight = seatHeight;
            this.recliningAngle = recliningAngle;
            this.headSupport = false;
            this.padding = "3 inch";
            this.seatSize = "16 inch";
            this.isHeightAdjustable = false;
            this.isMovable = false;
            this.type = "Chair";
            console.log(Chair.printDefaultProps()); //Usage of static method inside constructor
        } 
            
        static logObjectProps(){
            console.dir(this);
        }
    
            //Static within static usage
            static printDefaultProps(){
                    console.log(`Chair Back Support = ${this.backSupport}`);
                    console.log(`Arm rests support = ${this.armRests}`);
            }
        
        adjustableHeight() {};
        adjustAngle(){};
        moveChair(){};    
    } 


    class OfficeChair extends Chair {
        //Newly Added Properties (Private Fields)
        #basePrice;
        #maxDiscount;
        #sellerAddress;
    
        constructor(type, color, isHeightAdjustable, seatHeight, recliningAngle) {
            super();
            this.type = type;
            this.color = color;
            this.isHeightAdjustable = isHeightAdjustable;
            this.seatHeight = seatHeight;
            this.recliningAngle = recliningAngle;
            this.isMovable = true;
            this.#basePrice = 1000;
            this.#maxDiscount = 5; //In percentage
            this.#sellerAddress = "XYZ, street";
        }
    
        adjustableHeight(height) {
            if (height > this.seatHeight) {
                console.log(`Chair height changed to ${height}`);
            } else {
                console.log(`Height cannot be decreased more than the seat height ${this.seatHeight}`);
            }
        }
    
        adjustAngle(angle) {
            if (angle >= this.recliningAngle) {
                console.log(`Chair angle changed to ${angle}`);
            } else {
                console.log(`Angle cannot be decreased more than the min reclining angle ${this.recliningAngle}`);
            }
        }
    
        moveChair(x, y) {
            console.log(`Chair moved to co-ordinates = (${x}, ${y})`);
        }
    
        //Newly Added function
        #getChairAmount(taxCharge) {
            return this.#basePrice + (this.#basePrice - this.#basePrice * this.#maxDiscount / 100) + taxCharge;
        }
    
        //Newly Added function
        generateBill() {
            console.log("**** BILLING INFORMATION ****");
            console.log(`Chair Price = ${this.#getChairAmount(20)}`);
            console.log(`Seller Address = ${this.#sellerAddress}`);
        }
    }

const newOfficeChair = new OfficeChair("Red", true, 30, 30);

console.log(newOfficeChair.adjustableHeight(31));
console.log(newOfficeChair.adjustAngle(40));
console.log(newOfficeChair.moveChair(10,20));