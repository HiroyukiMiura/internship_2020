

import java.util.Scanner;

public class Test1 {

	public static void main(String[] args) {
		System.out.println("一つ目の値を入力してください");
		Scanner sc1 = new Scanner(System.in);
		int num1 = sc1.nextInt();

		System.out.println("二つ目の値を入力してください");
		Scanner sc2 = new Scanner(System.in);
		int num2 = sc2.nextInt();

		int total = num1 +num2;
		System.out.println("合計:"+total);
	}

}