import { getCategory, getUser } from "../../utils/userStorage";
import "../settings/Settings.css";

function Notifications() {
    const user = getUser();
    const expenses = Array.isArray(user?.expense) ? user.expense : [];
    const categories = getCategory();
    const notifications = expenses.slice().sort((first, second) => new Date(second.createdAt) - new Date(first.createdAt)).slice(0, 6).map((expense) => {
        const category = categories.find((item) => item.id === expense.category);
        return {
            title: expense.transactionType === "received" ? "Income recorded" : "Expense recorded",
            detail: `${expense.title || "Untitled transaction"} · ${category?.name || "Uncategorized"}`,
            date: expense.createdAt ? new Date(expense.createdAt).toLocaleDateString("en-IN") : "Date unavailable"
        };
    });

    if (notifications.length === 0) {
        notifications.push({ title: "No notifications yet", detail: "New transaction activity will appear here.", date: "" });
    }

    return (
        <main className="utility-page">
            <div className="utility-heading">
                <h1>Notifications</h1>
                <p>Recent activity from your expense manager.</p>
            </div>
            <section className="notification-list">
                {notifications.map((notification, index) => (
                    <div className="notification-item" key={`${notification.title}-${index}`}>
                        <div><strong>{notification.title}</strong><span>{notification.detail}</span></div>
                        <span>{notification.date}</span>
                    </div>
                ))}
            </section>
        </main>
    );
}

export default Notifications;
