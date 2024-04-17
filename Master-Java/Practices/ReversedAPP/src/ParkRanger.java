interface WalksOn4Legs {
}

abstract class Mammal {
    public int numberOfOffspring;
}

class Antelope extends Mammal implements WalksOn4Legs {
}

public class ParkRanger {
    public void noteNewOffspring(Mammal mammal) {
        mammal.numberOfOffspring++;
    }

    public static void main(String[] args) {
        new ParkRanger().noteNewOffspring(null);
    }
}