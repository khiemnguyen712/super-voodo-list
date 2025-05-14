import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int var1 = scanner.nextInt();
        int var2 = scanner.nextInt();
        int var3 = scanner.nextInt();

        int greatestNumber = Math.max(var2, var1);
        if (var3 > var1) {
            greatestNumber = var3;
        }

        System.out.println(greatestNumber);

        int sumOfOdd = 0;

        for (int i = 1; i <= 9; i += 2) {
            sumOfOdd += i;
        }
        System.out.println(sumOfOdd);

    }
}