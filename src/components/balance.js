let lessonCount = 6;

export function reduceBalance() {
    lessonCount -= 1;
    const dashboardBalanceCount = document.querySelector('.dashboard__balance-count');
    console.log(dashboardBalanceCount)

    if (dashboardBalanceCount) {
        dashboardBalanceCount.textContent = lessonCount;
    }
    else {
        console.log("Хм, элемент .dashboard__balance-count почему-то не найден в DOM!");
    }
}
