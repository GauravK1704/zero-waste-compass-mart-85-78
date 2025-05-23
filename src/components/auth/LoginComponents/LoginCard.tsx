
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import LoginForm from './LoginForm';
import Logo from '@/components/ui/logo';

const floatingElements = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const LoginCard: React.FC = () => {
  const [accountType, setAccountType] = useState<'buyer' | 'seller'>('buyer');
  
  // Listen for account type changes from the LoginForm
  const handleAccountTypeChange = (type: 'buyer' | 'seller') => {
    setAccountType(type);
  };
  
  // Dynamic styling based on account type
  const gradientStyle = accountType === 'buyer' 
    ? 'from-zwm-primary/5 to-zwm-secondary/5' 
    : 'from-amber-500/5 to-orange-500/5';
    
  const accentColor = accountType === 'buyer'
    ? 'from-zwm-primary to-zwm-secondary'
    : 'from-amber-500 to-orange-500';

  return (
    <motion.div 
      className="mx-auto w-full max-w-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo Section */}
      <motion.div 
        className="flex justify-center mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Link to="/">
          <Logo size="lg" animated={true} />
        </Link>
      </motion.div>
      
      {/* Decorative elements */}
      <motion.div 
        variants={floatingElements}
        initial="hidden"
        animate="show"
        className="absolute -z-10 inset-0 overflow-hidden pointer-events-none"
      >
        <motion.div 
          variants={item}
          className="absolute top-0 left-0 w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 blur-xl opacity-20"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          variants={item}
          className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur-xl opacity-20"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <motion.div 
          variants={item}
          className="absolute top-1/2 -right-16 w-24 h-24 rounded-full bg-gradient-to-r from-amber-300 to-orange-400 blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>
      
      <Card className="border-0 shadow-xl overflow-hidden bg-white rounded-xl">
        <div className={`absolute inset-0 bg-gradient-to-r ${gradientStyle} z-0`}></div>
        
        <CardHeader className="relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-2"
          >
            <CardTitle className="text-2xl font-bold mb-2">
              {accountType === 'buyer' ? 'Buyer Login' : 'Seller Login'}
            </CardTitle>
            <motion.div 
              className={`h-1 w-12 bg-gradient-to-r ${accentColor} mx-auto rounded-full`}
              animate={{
                width: ["0%", "100%", "50%"],
              }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <LoginForm onAccountTypeChange={handleAccountTypeChange} />
        </CardContent>
        
        <CardFooter className="flex justify-center relative z-10">
          <motion.p 
            className="text-sm text-gray-600"
            whileHover={{ scale: 1.05 }}
          >
            Don't have an account?{' '}
            <Link to="/register" className={`font-medium ${accountType === 'buyer' ? 'text-zwm-primary hover:text-zwm-secondary' : 'text-amber-600 hover:text-orange-500'}`}>
              Sign up
            </Link>
          </motion.p>
        </CardFooter>
      </Card>
      
      <motion.div 
        className="mt-4 text-center text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        By signing in, you agree to our{' '}
        <Link to="#" className="text-zwm-primary hover:text-zwm-secondary">Terms of Service</Link>{' '}
        and{' '}
        <Link to="#" className="text-zwm-primary hover:text-zwm-secondary">Privacy Policy</Link>
      </motion.div>
    </motion.div>
  );
};

export default LoginCard;
