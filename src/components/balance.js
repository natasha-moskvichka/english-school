let lessonCount = 6;

export function reduceBalance() {
    lessonCount -= 1;
    const dashboardBalanceCount = document.querySelector('.dashboard__balance-count');

    if (dashboardBalanceCount) {
        dashboardBalanceCount.textContent = lessonCount;
    }
}
