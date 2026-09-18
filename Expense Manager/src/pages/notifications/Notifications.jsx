import "../settings/Settings.css";
import { useState } from "react";
import useExpenses from "../../hooks/useExpenses";
import useCategories from "../../hooks/useCategories";

function Notifications() {
    const { expenses } = useExpenses();
    const { categories } = useCategories();
    const [activeFilter, setActiveFilter] = useState("all");
    const [readNotifications, setReadNotifications] = useState([]);

    const notifications = expenses
        .slice()
        .sort((first, second) => new Date(second.createdAt) - new Date(first.createdAt))
        .slice(0, 8)
        .map((expense) => {
            const category = categories.find((item) => item.id === expense.category);
            const isIncome = expense.transactionType === "received";

            return {
                id: expense.id,
                title: isIncome ? "Income recorded" : "Expense recorded",
                detail: `${expense.title || "Untitled transaction"} · ${category?.name || "Uncategorized"}`,
                date: expense.createdAt ? new Date(expense.createdAt).toLocaleDateString("en-IN") : "Date unavailable",
                amount: `${isIncome ? "+" : "-"}₹${Math.abs(Number(expense.amount) || 0).toFixed(2)}`,
                type: isIncome ? "income" : "expense"
            };
        });

    const unreadCount = notifications.filter((notification) => !readNotifications.includes(notification.id)).length;
    const visibleNotifications = activeFilter === "unread"
        ? notifications.filter((notification) => !readNotifications.includes(notification.id))
        : notifications;

    const markAllAsRead = () => {
        setReadNotifications(notifications.map((notification) => notification.id));
    };

    return (
        <main className="utility-page">
            <div className="utility-heading utility-heading-row">
                <div>
                    <span className="utility-eyebrow">Activity center</span>
                    <h1>Notifications</h1>
                    <p>Keep track of the latest movement in your expense account.</p>
                </div>
                <button className="text-action" type="button" onClick={markAllAsRead} disabled={unreadCount === 0}>
                    Mark all as read
                </button>
            </div>

            <section className="notification-overview">
                <div className="overview-card overview-card-accent">
                    <span className="overview-icon">!</span>
                    <div><strong>{unreadCount}</strong><span>Unread updates</span></div>
                </div>
                <div className="overview-card">
                    <span className="overview-icon overview-icon-soft">+</span>
                    <div><strong>{notifications.length}</strong><span>Recent activities</span></div>
                </div>
                <div className="overview-note">
                    <strong>You're all caught up faster.</strong>
                    <span>Review transaction activity here as you manage your budget.</span>
                </div>
            </section>

            <section className="notification-panel">
                <div className="panel-header">
                    <div>
                        <h2>Recent activity</h2>
                        <span>Latest updates from your account</span>
                    </div>
                    <div className="filter-tabs" role="tablist" aria-label="Notification filter">
                        <button className={activeFilter === "all" ? "active" : ""} type="button" onClick={() => setActiveFilter("all")}>All</button>
                        <button className={activeFilter === "unread" ? "active" : ""} type="button" onClick={() => setActiveFilter("unread")}>Unread {unreadCount > 0 && <span>{unreadCount}</span>}</button>
                    </div>
                </div>

                <div className="notification-list">
                    {visibleNotifications.length === 0 ? (
                        <div className="notification-empty">
                            <span className="empty-mark">OK</span>
                            <strong>{activeFilter === "unread" ? "No unread notifications" : "No notifications yet"}</strong>
                            <span>New transaction activity will appear here.</span>
                        </div>
                    ) : visibleNotifications.map((notification) => {
                        const isRead = readNotifications.includes(notification.id);

                        return (
                            <div className={`notification-item ${isRead ? "is-read" : ""}`} key={notification.id}>
                                <span className={`notification-type ${notification.type}`}>{notification.type === "income" ? "+" : "-"}</span>
                                <div className="notification-copy"><strong>{notification.title}</strong><span>{notification.detail}</span></div>
                                <strong className={`notification-amount ${notification.type}`}>{notification.amount}</strong>
                                <span className="notification-date">{notification.date}</span>
                                {!isRead && <button className="notification-read" type="button" aria-label="Mark notification as read" onClick={() => setReadNotifications([...readNotifications, notification.id])}></button>}
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}

export default Notifications;
