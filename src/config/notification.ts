export interface NotificationItem {
  message: string;
  priority: number;
}

export const notifications: NotificationItem[] = [
  {
    message: 'APMBC 2025 Conference details coming soon - Stay tuned for updates!',
    priority: 1
  },
  {
    message: 'Registration for APMBC 2025 will open in Q2 2025',
    priority: 2
  },
  {
    message: 'Call for papers for APMBC 2025 Special Issue now open',
    priority: 3
  },
  {
    message: 'New membership benefits announced for 2025',
    priority: 4
  }
];

export const getNotificationsByPriority = (): NotificationItem[] => {
  return notifications.sort((a, b) => a.priority - b.priority);
};