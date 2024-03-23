public class SAM {
    public static void main(String[] args) {
        
        new Thread(new Runnable() {
            @Override
            public void run(){
                System.out.println("Single Abstract Method");
            }
        }).start();

    }
}
