import { Navbar } from './components/Navbar';

export function OrdersPage({ orders, cart }) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/60 to-blue-900/70"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-indigo-400 rounded-full opacity-70 animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-violet-400 rounded-full opacity-30 animate-pulse"></div>
      </div>

      <Navbar cart={cart} />

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-6 drop-shadow-2xl">
            📦 YOUR ORDERS
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto drop-shadow-lg">
            Track and all your orders in one place
          </p>
        </div>

        {/* Orders Content */}
        <div className="max-w-6xl mx-auto">
          {orders.length === 0 ? (
            <div className="text-center">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-16 max-w-2xl mx-auto shadow-2xl">
                <div className="text-8xl mb-6">🛒</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">No Orders Yet</h3>
                <p className="text-purple-100 text-lg mb-8">
                  Start shopping and place your first order to see it here!
                </p>
                <a href="/explore" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  Start Shopping
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {orders.map((order, orderIndex) => (
                <div key={orderIndex} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
                  {/* Order Header */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Order #{order.id || orderIndex + 1}</h3>
                      <p className="text-purple-200">Placed on {new Date(order.date || Date.now()).toLocaleDateString()}</p>
                      <p className="text-green-300 text-sm mt-1">
                        📦 Will get Delivered Till: {new Date(order.deliveryDate || Date.now()).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        {order.status || 'Processing'}
                      </span>
                    </div>
                  </div>

                  {/* Customer Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white/10 rounded-2xl p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">👤 Customer</h4>
                      <p className="text-purple-100">{order.customer?.name || 'N/A'}</p>
                      <p className="text-purple-100">{order.customer?.email || 'N/A'}</p>
                      <p className="text-purple-100">{order.customer?.phone || 'N/A'}</p>
                    </div>

                    <div className="bg-white/10 rounded-2xl p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">📍 Shipping Address</h4>
                      <p className="text-purple-100">{order.customer?.address || 'N/A'}</p>
                    </div>

                    <div className="bg-white/10 rounded-2xl p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">💰 Order Summary</h4>
                      <p className="text-purple-100">Subtotal: Rs. {order.subtotal || 0}</p>
                      <p className="text-purple-100">Delivery: Rs. {order.deliveryCharges || 500}</p>
                      <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                        Total: Rs. {order.total || 0}
                      </p>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="bg-white/10 rounded-2xl p-6">
                    <h4 className="text-xl font-semibold text-white mb-4">📦 Order Items</h4>
                    <div className="space-y-4">
                      {order.items?.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-between bg-white/5 rounded-xl p-4">
                          <div className="flex items-center gap-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-contain rounded-lg bg-white/20"
                            />
                            <div>
                              <h5 className="text-lg font-semibold text-white">{item.name}</h5>
                              <p className="text-purple-200">Quantity: {item.quantity || 1}</p>
                              <p className="text-yellow-400 font-bold">Rs. {item.price}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-white">
                              Rs. {parseFloat(item.price.toString().replace(/[^\d.]/g, '')) * (item.quantity || 1)}
                            </p>
                          </div>
                        </div>
                      )) || <p className="text-purple-200">No items found</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}