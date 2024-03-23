﻿namespace DemoLibrary
{
    public class Manager : Employee
    {
        public override void CalculatePerHourRate(int rank)
        {
            decimal baseAmount = 19.75M;
            Salary = baseAmount + (rank * 4);
        }

        public void GeneratePerformanceReview()
        {
            Console.WriteLine("Reciving Report");
        }
    }
}