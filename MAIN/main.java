import arithmetic.Calculator;

class Main {
    public static void main(String[] args) {
        Calculator c = new Calculator();

        System.out.println("Addition = " + c.add(10, 20));
        System.out.println("Multiplication = " + c.multiply(10, 20));
    }
}